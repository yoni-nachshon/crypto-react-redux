

export const style = {

    container: ({ theme }) => ({
        background: theme === 'dark' ? '#343a40' : '#f8f9fa',
        color: theme === 'dark' ? '#343a40' : '#f8f9fa',
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '14px',
    }),
    title: ({ theme }) => ({
        marginTop: '2rem',
        color: theme === 'dark' ? '#f8f9fa' : '#343a40',
        fontSize: '18px',
    }),
    spinner: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}