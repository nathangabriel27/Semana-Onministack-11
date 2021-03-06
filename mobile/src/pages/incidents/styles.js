import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#fcf2dc',
    /*     
        alignItems: 'center',
        justifyContent: 'center', */
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 35,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  incidentsList: {
    marginTop: 22
  },
  incident: {
    padding: 24,
    borderRadius: 18,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 16,
    color: '#41414d',
    fontWeight: 'bold'
  },
  incidentvalue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 22,
    color:"#737380"

  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 18,
    fontWeight: 'bold'

  },

})