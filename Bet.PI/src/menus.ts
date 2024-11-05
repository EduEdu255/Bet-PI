export const headerMenus  = [
    {
        path: '/home',
        name: 'Todos os Jogos',
        role: ['role_admin', 'empresa', 'role_user']
    },
    {
        path: '/my-account',
        name: 'Minha Conta',
        role: ['empresa', 'role_user', 'role_admin']
    },
    {
        path: '/sobrenos',
        name: 'Sobre',
        role: ['empresa', 'role_user', 'role_admin']
    },
    {
        path: '/admin/adicionar-partida',
        name: 'Cadastrar',
        role: ['empresa', 'role_admin']
    },
    {
        path: '/historico',
        name: 'Historico',
        role: ['empresa', 'role_user', 'role_admin']
    }
];