import {colors} from '@/constants';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ForgotPasswordModalProps {
  isVisible: boolean;
  hide: () => void;
}

const ForgotPasswordModal = ({isVisible, hide}: ForgotPasswordModalProps) => {
  const {t} = useTranslation();

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={hide} // Android 백 버튼을 눌렀을 때 hide 함수 호출
    >
      <TouchableOpacity style={styles.overlay} onPress={hide}>
        <View style={styles.modalContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name="mail-outline" size={25} color={colors.WHITE} />
          </View>
          <Text style={styles.modalText}>{t('forgotPassword.modalTitle')}</Text>
          <Text style={styles.modalSubText}>
            {t('forgotPassword.modalSubTitle')}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingVertical: 30,
    borderRadius: 24,
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: '600',
  },
  modalSubText: {
    marginTop: 8,
    textAlign: 'center',
    color: colors.GRAY_700,
    lineHeight: 20,
  },
});

export default ForgotPasswordModal;
