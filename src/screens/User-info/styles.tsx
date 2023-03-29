import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    padding: mvs(20),
    paddingTop: mvs(20),
  },
  button: {
    marginTop: mvs(20),
  },
  accountText: {
    color: colors.primary,
    alignSelf: 'center',
    marginTop: mvs(20),
  },
  rowstyle: {
    justifyContent: 'flex-start',
    paddingVertical: mvs(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    // paddingHorizontal: mvs(10),
  },
  touchableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
export default styles;
