import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import { PAGE_NAMES } from '@/constans/pageNames'

const AdminPage = () => import('@/views/AdminPage.vue')
const AuthPage = () => import('@/views/AuthPage.vue')
const BuyPremium = () => import('@/views/BuyPremium.vue')
const Categories = () => import('@/views/Categories.vue')
const ChatPage = () => import('@/views/ChatPage.vue')
const ChatsList = () => import('@/views/ChatsList.vue')
const CreateListing = () => import('@/views/CreateListing.vue')
const MarketplacePage = () => import('@/views/MarketplacePage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PAGE_NAMES.HOME,
    component: MarketplacePage,
  },
  {
    path: '/admin-page',
    name: PAGE_NAMES.ADMIN_PAGE,
    component: AdminPage,
  },
  {
    path: '/create-listing',
    name: PAGE_NAMES.CREATE_LISTING,
    component: CreateListing,
  },
  {
    path: '/chats-list',
    name: PAGE_NAMES.CHATS_LIST,
    component: ChatsList,
  },
  {
    path: '/chat',
    name: PAGE_NAMES.CHAT,
    component: ChatPage,
  },
  {
    path: '/categories',
    name: PAGE_NAMES.CATEGORIES,
    component: Categories,
  },
  {
    path: '/buy-premium',
    name: PAGE_NAMES.BUY_PREMIUM,
    component: BuyPremium,
  },
  {
    path: '/auth',
    name: PAGE_NAMES.AUTH,
    component: AuthPage,
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
