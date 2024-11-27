export const headerMenus  = [
    {
        path: '/home',
        name: 'Próximos jogos',
        role: ['role_admin', 'empresa', 'role_user']
    },
    {
        path: '/my-account',
        name: 'Editar cadastro',
        role: ['empresa', 'role_user', 'role_admin']
    },
    {
        path: '/sobrenos',
        name: 'Sobre',
        role: ['empresa', 'role_user', 'role_admin']
    },
    {
        path: '/admin/adicionar-partida',
        name: 'Adicionar partida',
        role: ['empresa', 'role_admin']
    },
    {
        path: '/admin/realizar-partida',
        name: 'Finalizar Partida',
        role: ['empresa', 'role_admin']
    },
    {
        path: '/historico',
        name: 'Minhas apostas',
        role: ['empresa', 'role_user']
    }
];