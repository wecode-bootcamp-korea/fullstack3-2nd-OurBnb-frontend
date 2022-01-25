import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

function ModalPage() {
	const [modalVisible, setModalVisible] = useState(false);
	const openModal = () => {
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
	};
	return (
		<>
			<button onClick={openModal}>Open Modal</button>
			{modalVisible && (
				<Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
					Hello
				</Modal>
			)}
		</>
	);
}

export default ModalPage;
