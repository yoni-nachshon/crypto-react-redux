

export const style = {
    changeTheme: ({ theme }) => ({
        background: theme === "dark" ? "dark" : "light",
        color: theme === "dark" ? "dark" : "light"
    }),
    container: ({ theme }) => ({
        background: theme === 'dark' ? '#343a40' : '#f8f9fa',
        color: theme === 'dark' ? '#343a40' : '#f8f9fa',
        display: ' flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '14px',
    }),
    table: {
        marginTop: '2rem',
        textAlgin: 'center'
    },
    sort: {
        border: 'none',
        textAlgin: 'center',
    },
    spinner: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '15rem',
        marginTop:'1rem'
    },
    select: {
        float: 'right',
        width: '10rem',
        marginTop: '1rem',
        direction: 'ltr'

    },
    title: ({ theme }) => ({
        marginTop: '1rem',
        color: theme === 'dark' ? '#f8f9fa' : '#343a40'

    }),

}