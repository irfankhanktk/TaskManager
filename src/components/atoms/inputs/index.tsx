import React, { useState, useRef } from 'react';
import {
  ColorValue,
  I18nManager,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PhoneInput from 'react-native-phone-number-input';
import Regular from 'typography/regular-text';
import { mvs } from '../../../config/metrices';
import { colors } from './../../../config/colors';
import Medium from 'typography/medium-text';
import { Row } from '../row';
import { useAppSelector } from 'hooks/use-store';
import CartModal from 'components/molecules/modals/department-modal';
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import { t } from 'i18next';
import MultiDropdownModal from 'components/molecules/modals/multi-dropdown-modal';
import { ScrollView } from 'react-native-gesture-handler';
type Item = { label: string; value: string };
type props = {
  isRequired?: boolean;
  onChangeText: (text: string | any[]) => void;
  onPress?: () => void;
  onPressIn?: () => void;
  getCallingCode?: (text: string) => void | undefined;
  value?: any;
  label?: string;
  items?: any[];
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  ref?: React.LegacyRef<PhoneInput> | undefined;
  defaultCode?: 'PK';
  layout?: 'first';
  isPassword?: boolean;
  editable?: boolean;
  disabledSearch?: boolean;
  error?: string;
  id?: any;
  icon?: string;
  placeholderTextColor?: ColorValue | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
const PrimaryInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const { language } = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isPassword,
    placeholderTextColor,
    icon,
    keyboardType,
    error,
    editable = true,
    onBlur = () => { },
    onPressIn = () => { },
    isRequired = false,
  } = props;
  return (
    <>
      <Regular label={label} style={[styles.labelStyle, labelStyle]}>
        {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
      </Regular>
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.lightGray}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}
        {icon && (
          <TouchableOpacity style={styles.PasswordIcon}>
            <AntDesign size={25} name={icon} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </>
  );
};
export default React.memo(PrimaryInput);

export const CommentInput = (props: props) => {
  const {
    onChangeText,
    onPress = () => { },
    value,
    style,
    placeholder = 'Write Message',
    containerStyle,
    isPassword,
    keyboardType,
    error,
    onBlur = () => { },
  } = props;
  return (
    <>
      <View style={[styles.commentContainer, containerStyle]}>
        <TextInput
          onBlur={onBlur}
          keyboardType={keyboardType}
          value={value}
          placeholderTextColor={`${colors.black}50`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput, style]}
        />
        <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
          <Feather
            size={20}
            name={value?.trim()?.length ? 'send' : 'mic'}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
      <Regular label={error ? error : ''} style={styles.errorLabel} />
    </>
  );
};
export const InputWithIcon = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => { },
    value,
    style,
    containerStyle,
    id,
    editable,
    error,
    label,
    isRequired = false,
    icon = 'calendar',
  } = props;
  return (
    <View style={[containerStyle]}>
      <Regular label={label} style={[styles.labelStyle,]}>
        {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
      </Regular>
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer]}>
        <Medium label={value} />
        <AntDesign size={20} name={icon} color={colors.primary} />
      </TouchableOpacity>
      {/* <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} /> */}
      <DropdownModal
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={id}
        visible={visible}
        items={items}
      />
    </View>
  );
};
export const MulDropdownInput = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => { },
    value,
    style,
    containerStyle,
    id,
    editable,
    error,
    label,
    isRequired = false,
    icon = 'calendar',
  } = props;
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <View

        style={[styles.multiDropDownContainer, containerStyle]}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {items?.filter(x => x?.selected)?.map((ele, index) => <Row
            style={{
              paddingHorizontal: mvs(10),
              paddingVertical: mvs(5),
              backgroundColor: colors.primary,
              borderRadius: mvs(5),
              alignItems: 'center',
              marginRight: mvs(10),
            }}>
            <Medium label={ele?.title} color={colors.white} />
            <TouchableOpacity
              style={{ paddingLeft: mvs(5) }}
              onPress={() => {
                const copy = [...items];
                ele.selected = !ele.selected;
                copy[index] = ele;
                onChangeText(copy);
              }}>
              <AntDesign size={15}
                name={'closecircle'}
                color={colors.white} />
            </TouchableOpacity>
          </Row>)}
        </ScrollView>
        <TouchableOpacity
          style={{ paddingLeft: mvs(5) }}
          disabled={editable}
          onPress={() => {
            setVisible(true);
            onBlur();
          }}>
          <AntDesign size={20}
            name={icon}
            color={colors.primary} />
        </TouchableOpacity>
      </View>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <MultiDropdownModal
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={value}
        visible={visible}
        items={items}
      />
    </>
  );
};

export const PrimaryPhoneInput = (props: props) => {
  const phoneRef = useRef<PhoneInput>(null);
  const {
    onChangeText = t => { },
    getCallingCode = t => { },
    value,
    style,
    label,
    placeholder = 'Enter phone number',
    labelStyle,
    containerStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    ref,
    layout = 'first',
    defaultCode = 'PK',
    onBlur,
  } = props;
  return (
    <>
      <PhoneInput
        ref={phoneRef}
        value={value}
        defaultCode={defaultCode}
        layout={'first'}
        onChangeText={t => {
          onChangeText(t);
          const code = phoneRef.current?.getCallingCode();
          if (code) getCallingCode(code);
        }}
        placeholder={placeholder}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
      />
      <Regular label={error} style={styles.errorLabel} />
    </>
  );
};
export const SearchInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = t('search_here'),
    labelStyle,
    containerStyle,
    secureTextEntry,
    keyboardType,
    error,
    onBlur,
    editable,
    disabledSearch = true,
  } = props;
  return (
    // <View style={[styles.searchContainer, containerStyle]}>
    //   <TouchableOpacity
    //     disabled={disabledSearch}
    //     style={styles.searchIcon}
    //     onPress={() => {}}>
    //     <Feather size={mvs(22)} name={'search'} color={colors.black} />
    //   </TouchableOpacity>
    //   <TextInput
    //     editable={editable}
    //     onBlur={onBlur}
    //     keyboardType={keyboardType}
    //     value={value}
    //     placeholder={placeholder}
    //     placeholderTextColor={`${colors.border}`}
    //     onChangeText={onChangeText}
    //     style={[styles.searchTextInput, style]}
    //   />
    //   <TouchableOpacity
    //     disabled={disabledSearch}
    //     style={styles.searchIcon}
    //     onPress={() => {}}>
    //     <MaterialIcons size={mvs(22)} name={'cancel'} color={colors.black} />
    //   </TouchableOpacity>
    // </View>
    <View style={[styles.searchContainer, containerStyle]}>
      <TextInput
        editable={editable}
        onBlur={onBlur}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
        onChangeText={onChangeText}
        style={[styles.searchTextInput, style]}
      />
      <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => { }}>
        <Feather size={mvs(22)} name={'search'} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: mvs(0.7),
    borderColor: colors.primary,
    height: mvs(60),
    alignItems: 'center',
    // paddingTop: mvs(7),
    // marginBottom: mvs(5),
    borderRadius: mvs(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
  },
  commentContainer: {
    alignItems: 'flex-start',
    borderWidth: mvs(0.7),
    // height: mvs(36),
    paddingVertical: mvs(7),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
    marginTop: mvs(5),
  },
  dropDownContainer: {
    // borderWidth: mvs(0.7),
    height: mvs(50),
    alignItems: 'center',
    // marginBottom: mvs(10),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
  },
  multiDropDownContainer: {
    // borderWidth: mvs(0.7),
    height: mvs(50),
    alignItems: 'center',
    // marginBottom: mvs(10),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
  },
  phoneContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    height: mvs(56),
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  textContainerStyle: { backgroundColor: colors.white },
  textInput: {
    color: colors.black,
    textAlignVertical: 'center',
    fontSize: mvs(18),
    flex: 1,
    // height: mvs(40),
    // width: mvs(275),
    padding: mvs(0),
  },
  textInputStyle: {
    color: colors.primary,
    height: mvs(56),
    backgroundColor: colors.white,
    margin: 0,
    fontSize: mvs(17),
  },
  codeTextStyle: {
    color: colors.primary,
    fontSize: mvs(17),
  },
  labelStyle: {
    alignSelf: 'flex-start',
    color: colors.primary,
    marginBottom: mvs(3),
    paddingHorizontal: mvs(5),
  },
  PasswordIcon: {
    alignSelf: 'center',
    paddingHorizontal: mvs(5),
  },
  errorLabel: {
    // alignSelf: 'flex-start',
    color: colors.red,
    // backgroundColor: 'red',
    fontSize: mvs(10),
    marginBottom: mvs(2),
    height: mvs(15),
    marginHorizontal: mvs(5),
  },
  // searchContainer: {
  //   height: mvs(52),
  //   borderRadius: mvs(5),
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: mvs(10),
  //   backgroundColor: colors.white,
  //   alignItems: 'center',
  //   ...colors.shadow,
  // },
  searchContainer: {
    height: mvs(52),
    borderRadius: mvs(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: mvs(20),
    backgroundColor: colors.white,
    alignItems: 'center',
    ...colors.shadow,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  // searchIcon: {
  //   // backgroundColor: colors.primary,
  //   borderRadius: mvs(20),
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  searchIcon: {
    backgroundColor: colors.primary,
    width: mvs(77),
    height: '100%',
    borderRadius: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // searchTextInput: {
  //   color: colors.black,
  //   textAlignVertical: 'center',
  //   height: mvs(36),
  //   fontSize: mvs(14),
  //   flex: 1,
  //   paddingHorizontal: mvs(10),
  //   padding: mvs(0),
  // },
  searchTextInput: {
    color: colors.primary,
    textAlignVertical: 'center',
    height: mvs(36),
    fontSize: mvs(14),
    width: '75%',
    paddingHorizontal: mvs(15),
    padding: mvs(0),
  },
  secondaryErrorLabel: {
    alignSelf: 'flex-start',
    color: colors.primary,
    fontSize: mvs(10),
    marginBottom: mvs(10),
    marginHorizontal: mvs(5),
  },
});
