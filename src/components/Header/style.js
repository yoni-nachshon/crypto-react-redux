

export const style = {
    select: {
        width: '7rem',
        marginTop: '1rem',
        direction: 'ltr'
        
    },
    btn: ({ theme }) => ({
        background: theme === 'dark' ? '#212529' : 'none',
        color: theme === 'dark' ? '#212529' : 'none',
        marginTop: '1.1rem',
        border: 'none',
    }),
    input: {
        width: '10rem',
        marginTop: '1rem'
    },
}