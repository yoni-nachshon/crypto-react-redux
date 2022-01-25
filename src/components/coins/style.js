

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
    table: {
        marginTop: '2rem',
        textAlgin: 'center',       
    },
    sort: {
        border: 'none',
        textAlgin: 'center',
    },
    spinner: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '10rem',
        marginTop: '1rem'
    },
    notFound: {
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '18px',
        fontWeight: 600,
    },
    select: {
        width: '7rem',
        marginTop: '1rem',
    },
    btn: {
        marginTop: '1rem'
    },
}