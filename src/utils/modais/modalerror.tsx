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
    color: '#d00', 
  },
};


export default function ModalError( props: { message: string, open: boolean, setIsOpen(e:boolean):void, error: string } ) {
 
  function closeModal() {
    props.setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={props.open}   
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 > {props.message}</h2>
        <p>{props.error}</p>
        
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