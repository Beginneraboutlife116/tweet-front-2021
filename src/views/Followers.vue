<template>
  <div class="followers-container">
    <header class="followers__header">
      <div class="followers__header__title">
        <svg
          @click="$router.back()"
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9995 10.9999H6.4135L10.7065 6.70687C11.0965 6.31687 11.0965 5.68388 10.7065 5.29288C10.3165 4.90188 9.6835 4.90288 9.2925 5.29288L3.2925 11.2929C2.9025 11.6829 2.9025 12.3159 3.2925 12.7069L9.2925 18.7069C9.4875 18.9019 9.7425 18.9999 9.9995 18.9999C10.2565 18.9999 10.5115 18.9019 10.7065 18.7069C11.0965 18.3169 11.0965 17.6839 10.7065 17.2929L6.4135 12.9999H18.9995C19.5525 12.9999 19.9995 12.5529 19.9995 11.9999C19.9995 11.4469 19.5525 10.9999 18.9995 10.9999Z"
            fill="black"
          />
        </svg>
        <div class="followers__header__title__wrapper">
          <p class="name">{{ profile.name }}</p>
          <!-- nodata now -->
          <p class="tweetCounts">{{ profile.tweetCounts }} 推文</p>
        </div>
      </div>
    </header>
    <div class="main__follow__tabs">
      <router-link
        :to="`/home/${profile.id}/followers`"
        class="main__follow__tabs--link"
        ><p>跟隨者</p></router-link
      >
      <router-link
        :to="`/home/${profile.id}/followings`"
        class="main__follow__tabs--link"
        ><p>正在跟隨</p></router-link
      >
      </div>
      <Followship
      v-for="follower in followers"
      :key="follower.followerId"
      :initialFollow="follower"
    />
    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { Toast } from './../mixins/helpers'
import usersAPI from './../apis/users'
import Followship from './../components/Followship'
import followAPI from '../apis/followships'
import Spinner from './../components/Spinner'
export default {
  name: 'Followers',
  components: {
    Followship,
    Spinner
  },
  data () {
    return {
      followers: [],
      profile: {
        id: 0,
        name: 'user1',
        tweetCounts: 0
      }
    }
  },
  created () {
    const { userId } = this.$route.params
    this.fetchFollowers(userId)
    this.fetchProfile(userId)
  },
  beforeRouteUpdate (to, from, next) {
    const { userId } = to.params
    this.fetchFollowers(userId)
    this.fetchProfile(userId)
    next()
  },
  methods: {
    async fetchFollowers (userId) {
      try {
        this.isProcessing = true
        this.isLoading = true
        const { data } = await followAPI.getFollowers(userId)
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        this.followers = data.map((data) => {
          return {
            ...data
          }
        })
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法獲取跟隨者資料，請稍後再嘗試'
        })
      }
    },
    async fetchProfile (userId) {
      try {
        this.isProcessing = true
        this.isLoading = true
        const { data } = await usersAPI.getUserProfile(userId)
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.profile = {
          ...data
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法獲取個人資料，請稍後再嘗試'
        })
      }
    }
  }
}
</script>
<style lang="scss">
.router-link-exact-active.main__follow__tabs--link {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}

.followers-container {
  grid-column: 1;
  height: 100vh;
  border-inline: 1px solid var(--border-color);
  overflow: scroll;
}

.followers__header {
  svg {
    cursor: pointer;
  }
  &__title {
    display: flex;
    align-items: center;
    padding: 0.7rem 0 1rem 1.5rem;
    &__wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 4rem;
      .name {
        line-height: 2.75rem;
        font-weight: 900;
        font-size: $font-xl;
      }
      .tweetCounts {
        color: var(--label-color);
        font-size: $font-xs;
      }
    }
  }
}

.main__follow__tabs {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  &--link {
    height: 5.2rem;
    width: 13rem;
    line-height: 5.2rem;
    font-weight: 500;
    font-size: $font-md;
    color: var(--label-color);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--main-color);
      border-bottom: 2px solid var(--main-color);
    }
  }
}

.follow {
  position: relative;
  display: flex;
  padding: 1rem 1rem 0rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
  &__avatar {
    margin-top: 0.3rem;
    margin-right: 1rem;
    img {
      max-width: 5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &__info {
    &-follower {
      margin: 0.4rem 0 0.5rem 0;
      font-size: $font-md;
      line-height: $font-md;
      .name {
        margin-right: 0.5rem;
        font-weight: bold;
        color: var(--font-color);
      }
      .account {
        margin: 0.5rem 0;
        color: var(--label-color);
      }
    }
    &-description {
      margin-bottom: 1rem;
      font-size: $font-md;
      color: var(--font-color);
    }
  }
  button {
    position: absolute;
    right: 1.5rem;
    @extend %buttonStyle;
    height: 2.5rem;
    width: 9rem;
    font-size: $font-md;
  }
}
</style>
