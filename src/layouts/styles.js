const styles = {
    messenger: {
        width: 50,
        height: 50,
        background: '#4F78E0',
        position: "absolute",
        zIndex: 1,
        bottom: 20,
        right: 20,
        borderRadius: "0 10px 10px 10px",
        display: "flex",
        justifyContent: "center"
    },

    divMessage: {
        position: "absolute",
        bottom: 80,
        right: 20,
        zIndex: 1,
        width: 300,
        height: 400,
        borderRadius: 10,
        backgroundColor: "#fff"
    },

    headerMsg: {
        display: "flex",
        justifyContent:"center",
        // flexDirection:"column",
        alignItems: 'center',
        marginTop:25
    },

    btnMsg: {
        display:"flex" ,
        justifyContent:"center",
        alignItems: 'center',
        width:"100%",
        marginTop:10,
        cursor:"pointer"
    }

};

export default styles;