import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    with:'300px',
    color: 'green', 
  },
};


export default function ModalSucess( props: { message: string, open: boolean, setIsOpen(e:boolean):void } ) {
 
  function closeModal() {
    props.setIsOpen(false);
    window.location.reload();
  }

  return (
    <div>
      <Modal
        isOpen={props.open}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 > {props.message}</h2>
        <br />
        
        <button 
        style={{
            width: '100px',
            height: '30px',
            backgroundColor: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginLeft: '30%'
        }} onClick={closeModal}>Ok</button>
        
      
      </Modal>
    </div>
  );
}