import { createWebHistory, createRouter } from 'vue-router'

import LoginView from '@/components/pages/login/LoginView.vue'
import HomeView from '@/components/pages/home/HomeView.vue'
import SobreNosView from '@/components/pages/sobrenos/SobreNosView.vue'
import CadastroView from '@/components/pages/cadastro/CadastroView.vue'
import MakeBetView from '@/components/pages/bets/MakeBetView.vue'
import CreateAccount from './components/pages/account/CreateAccount.vue'
import MyAccount from './components/pages/account/MyAccount.vue'
import BetResultView from './components/pages/bets/BetResultView.vue'

const routes = [
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView},
  { path: '/sobrenos', component: SobreNosView},
  { path: '/cadastrar', component: CadastroView},

  { path: '/games/:id/make-bet', component: MakeBetView},
    { path: '/games/:userbetid/bet-result', component: BetResultView},
  { path: '/create-account', component: CreateAccount },
  { path: '/my-account', component: MyAccount},
  // { path: '/login', component: LoginView},
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes,
});

export default router;