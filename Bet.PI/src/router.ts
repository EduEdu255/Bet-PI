import { createWebHistory, createRouter } from 'vue-router'

import LoginView from './components/pages/login/LoginView.vue'
import HomeView from './components/pages/home/HomeView.vue'
import HomeVisit from './components/pages/home/HomeView.vue'
import SobreNosView from './components/pages/sobrenos/SobreNosView.vue'
import AdministradoPartidaView from './components/pages/administrador/AdicionarPartidaView.vue'
import CadastroView from './components/pages/cadastro/CadastroView.vue'
import HistoricoView from './components/pages/historico/HistoricoView.vue'
import TrocarSenhaView from './components/pages/trocarSenha/TrocarSenhaView.vue'
import MakeBetView from './components/pages/bets/MakeBetView.vue'
import CreateAccount from './components/pages/account/CreateAccount.vue'
import MyAccount from './components/pages/account/MyAccount.vue'
import BetResultView from './components/pages/bets/BetResultView.vue'
import TimeView from './components/pages/times/TimeView.vue'
import RealizarPartidaView from './components/pages/administrador/RealizarPartidaView.vue'
import ApostasGanhas from "./components/pages/bets/ApostasGanhas.vue";

const routes = [
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView},
  { path: '/', component: HomeView},
  { path: '/sobrenos', component: SobreNosView},
  { path: '/admin/adicionar-partida', component: AdministradoPartidaView},
  { path: '/admin/realizar-partida', component: RealizarPartidaView},
  { path: '/cadastrar', component: CadastroView},
  { path: '/historico', component: HistoricoView},
  { path: '/trocar-senha', component: TrocarSenhaView },
  {path: '/times', component: TimeView},

  { path: '/games/:id/make-bet', component: MakeBetView},
    { path: '/games/:userbetid/bet-result', component: BetResultView},
  { path: '/create-account', component: CreateAccount },
  { path: '/my-account', component: MyAccount},
  {path: '/apostas/vencedoras', component: ApostasGanhas},
  // { path: '/login', component: LoginView},
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes,
});

export default router;