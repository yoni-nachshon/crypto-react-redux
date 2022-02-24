

export const style = {
    header: {
        direction: 'ltr'  
    },
    lng: {
        marginTop: '1rem',       
    },
    btn: ({ theme }) => ({
        background: theme === 'dark' ? '#212529' : 'none',
        color: theme === 'dark' ? '#212529' : 'none',
        marginTop: '1.1rem',
        border: 'none',
    }),
    input: ({ storage }) => ({
        width: '10rem',
        marginTop: '1rem',
        direction: storage === 'en' ? 'ltr' : 'rtl',
    }),
}