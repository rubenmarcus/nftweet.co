import { isCompositeType } from "graphql"
import { MetadataField, Wallet } from "mintbase"

export const MinterService = async (wallet: Wallet, data: any) => {
  wallet.minter.setMetadata(data, true)

  const file = await fetchImagetoBlob(data.media)

  try {
    const { data: fileUploadResult, error: fileError } =
      await wallet.minter.uploadField(MetadataField.Media, file as File)

    if (fileError) {
      throw new Error(fileError)
    }
  } catch (error) {
    // handle error here
    console.error(error)
  }

  const { data: metadataId, error } = await wallet.minter.getMetadataId()

  const walletObj = {
    callbackUrl: `${window.location.origin}/success`,
    meta: JSON.stringify({
      type: "mint",
      args: {
        contractAddress: "nftweet.mintspace2.testnet",
        amount: 1,
        thingId: `${metadataId}:'nftweet.mintspace2.testnet`,
      },
    }),
    royaltyPercentage: 0,
    metadataId,
  }

  await wallet.mint(
    1,
    "nftweet.mintspace2.testnet",
    undefined,
    undefined,
    "photography",
    walletObj
  )
}

const fetchImagetoBlob = async (img: string) => {
  const image = await fetch(img)
  return image.blob()
}
