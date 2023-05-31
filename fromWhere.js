function fromWhere(carRegNumber){
	if (carRegNumber.startsWith ("CY")){
    return "Bellville"
    } else if (carRegNumber.startsWith("CJ")){
    return "Paarl"
    } else if (carRegNumber.startsWith("CA")){
    return "Cape Town"
    }else{
      return "Some other place!"
    }
}
  console.log(fromWhere("ZN 568593"))