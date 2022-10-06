import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Register from '../views/Register.vue'
import UploadPicture from '../views/UploadPicture.vue'
import store from '../store/index'
import PhotoDetail from '../views/PhotoDetail'
import PostFeed from '../components/PostFeed'
import Post from '../components/Post'
import FavoritesView from '../views/FavoritesView'
import PublicUserProfile from '../views/PublicUserProfile.vue'
import SearchPage from '../views/Search.vue'
import UpdateUserPage from '../views/UpdateUserPage'


Vue.use(Router)

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/upload",
      name: "upload",
      component: UploadPicture,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path:"/picture/:postId",
    //   name:"picDetails",
    //   component: PhotoDetail,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path:"/test",
      name:"test",
      component: PostFeed,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:"/test2/:postId",
      name:"test2",
      component: Post,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:"/favorite",
      name: "favorite",
      component: FavoritesView,
      meta:{requiresAuth: true
      }
    },
    {  
    path:"/details/:postId",
      name:"details",
      component: PhotoDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile/:username',
      name: 'PublicUserProfile',
      component: PublicUserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/results',
      name: 'searchUsers',
      component: SearchPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/update',
      name: 'updatePage',
      component: UpdateUserPage,
      meta: {
        requiresAuth: true
      }
    }



  ]
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === '') {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
