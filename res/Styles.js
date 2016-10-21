import Colors from './Colors';
import Sizes from './Sizes';

export const Styles = {

  // text
  Text: {
    backgroundColor: Colors.Transparent,
    fontWeight: '100',
    fontSize: Sizes.Text,
    color: Colors.Text
  },

  Emphasized: {
    fontWeight: '700',
    color: Colors.EmphasizedText
  },

  Title: {
    fontFamily: 'Avenir',
    fontSize: Sizes.H3
  },

  Oversized: {
    fontSize: Sizes.H1
  },

  Subtitle: {
    fontFamily: 'IowanOldStyle-Italic',
    color: Colors.SubduedText
  },

  SmallText: {
    fontSize: Sizes.SmallText
  },

  Alternate: {
    backgroundColor: Colors.Transparent,
    color: Colors.AlternateText
  },

  Subdued: {
    color: Colors.SubduedText
  },

  Center: {
    textAlign: 'center'
  },

  // containers
  Card: {
    backgroundColor: Colors.Foreground,
    padding: Sizes.OuterFrame
  },

  TopSpacing: {
    marginTop: Sizes.Divider
  },

  BottomSpacing: {
    marginBottom: Sizes.Divider
  },

  BottomHalfSpacing: {
    marginBottom: Sizes.Divider / 2
  },

  EqualColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export default Styles;
