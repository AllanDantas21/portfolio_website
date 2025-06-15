interface Project {
  id: string
  badgeLabel: string
  badgeColor: string
  difficulty: string
}

export const PROJECTS: Project[] = [
    { 
        id: 'fdf', 
        badgeLabel: 'FDF',
        badgeColor: 'purple',
        difficulty: 'RANK 02'
    },
    { 
        id: 'philo', 
        badgeLabel: 'Philosophers',
        badgeColor: 'blue',
        difficulty: 'RANK 03'
    },
    { 
        id: 'push_swap', 
        badgeLabel: 'Push Swap',
        badgeColor: 'green',
        difficulty: 'Rank 02'
    },
    { 
        id: 'minishell', 
        badgeLabel: 'Minishell',
        badgeColor: 'red',
        difficulty: 'Rank 03'
    }
]
