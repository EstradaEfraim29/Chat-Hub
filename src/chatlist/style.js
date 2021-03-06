const styles = theme => ({
    root: {
      height: 'calc(100% - 40px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    listItem: {
      cursor: 'pointer'
    },
    newChatBtn: {
      borderRadius: '0px',
      height: '50px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    }
  });
  
  export default styles;