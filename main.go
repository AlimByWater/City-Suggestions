package main

import (
	"gopkg.in/webdeskltd/dadata.v2"
)

func main() {
	token := "29fdeb5bce498ac75239948506f5b6ba3fb621fb"
	daData := dadata.NewDaData(token, "")
	result, err := daData.SuggestAddresses(daData.SuggestRequestParams{Query: "москва хабар", Count: 2})
}
