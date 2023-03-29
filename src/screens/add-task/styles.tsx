import { StyleSheet } from 'react-native';
import { mvs } from '../../config/metrices';
import { colors } from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  width: { width: '48%' },
  inputContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    marginBottom: mvs(12),
  },
  row: {
    marginBottom: mvs(10)
  },
  plusBtn: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: mvs(0),
    paddingHorizontal: mvs(10),
    paddingBottom: mvs(5),
  },
  removeBtn: {
    alignSelf: 'flex-end',
    top: 0,
    position: 'absolute',
  },
  search: {
    paddingHorizontal: mvs(20),
    marginTop: -30,
    marginBottom: mvs(10),
  },
  taskContainer: {
    padding: mvs(12),
    borderRadius: mvs(10),
    borderColor: colors.border,
    // borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.secondary,
    marginBottom: mvs(15),
  },
  body: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(100),
    marginTop: mvs(10),
  },
  // columnWrapperStyle: {
  //   justifyContent: 'space-between',
  // },
  servicesHeading: {
    marginHorizontal: mvs(20),
  },
  bgImg: {
    height: mvs(200),
    paddingHorizontal: mvs(25),
    paddingVertical: mvs(30),
  },
});
export default styles;
