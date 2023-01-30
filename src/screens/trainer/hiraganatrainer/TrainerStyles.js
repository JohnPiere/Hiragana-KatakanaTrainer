import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  character: {
    fontSize: 120,
  },
  characterContainer: {
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "30%",
    borderRadius: 35,
    shadowColor: "#000",
  },
  button: {
    alignItems: "center",
    height: 50,
    textAlign: "center",
    borderRadius: 25,
    borderWidth: 2,
    fontWeight: "bold",
    fontSize: 16,
    marginHorizontal: 15,
    backgroundColor: "black",
  },
  buttons: {
    width: "90%",
    marginVertical: "1.5%",
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
  optionsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: "8%",
  },
  //Progress
  progressContainer: {
    marginVertical: "5%",
  },
  progressBar: {
    width: "100%",
    marginBottom: 20,
  },
  //Modal
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modal: {
    marginTop: "-15%",
    width: "90%",
    height: "35%",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 30,
    alignItems: "center",
  },
  modalButton: {
    justifyContent: "center",
    margin: "5%",
    height: "32%",
    borderRadius: 25,
    backgroundColor: "black",
  },
  modalButtonContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  modalText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    textAlign: "center",
    marginTop: 5,
  },
  modalButtonContainer: {
    paddingTop: "10%",
  },
  congratsText: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
    width: "80%",
    fontWeight: "bold",
    marginTop: "-20%",
    marginBottom: "20%",
  },
  normalText: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
    width: "80%",
    fontWeight: "bold",
    marginTop: "-20%",
    marginBottom: "15%",
    opacity: 0,
  },
  normalClose: {
    marginTop: "-16%",
  },
  closeDisabled: {
    opacity: 0,
    marginTop: "-16%",
  },
});
