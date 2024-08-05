import {colors} from '@/constants';
import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CustomModalProps {
  icon: string;
  single?: boolean;
  label: string;
  content: string;
  text?: string;
  cancel?: () => void;
  confirm: () => void;
  isVisible: boolean;
}

const CustomModal = ({
  icon,
  single = false,
  label,
  content,
  isVisible,
  text = 'Confirm',
  cancel,
  confirm,
}: CustomModalProps) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <View style={styles.modalBackground}>
        <View style={styles.container}>
          <View style={styles.modalIconBox}>
            <Ionicons name={icon} size={24} color={colors.WHITE} />
          </View>
          <Text style={styles.modalLabel}>{label}</Text>
          <Text style={styles.modalContent}>{content}</Text>

          <View style={styles.modalButtonBox}>
            {!single && (
              <Pressable onPress={confirm} style={styles.modalCancelButton}>
                <Text
                  style={[styles.modalButtonText, styles.modalButtonCancel]}>
                  Cancel
                </Text>
              </Pressable>
            )}
            <Pressable onPress={confirm} style={styles.modalConfirmButton}>
              <Text style={[styles.modalButtonText]}>{text}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: colors.WHITE,
    width: '100%',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 32,
  },
  modalIconBox: {
    width: 44,
    height: 44,
    backgroundColor: colors.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  modalLabel: {
    marginTop: 20,
    color: colors.BLACK,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  modalContent: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
    color: colors.GRAY_700,
    lineHeight: 20,
  },
  modalButtonBox: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 14.56,
  },
  modalCancelButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: colors.BLACK,
    borderRadius: 16,
  },
  modalConfirmButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.ORANGE,
  },
  modalButtonText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600',
    color: colors.WHITE,
  },
  modalButtonCancel: {
    color: colors.BLACK,
  },
});

export default CustomModal;
