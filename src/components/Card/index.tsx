import { Container, DialogContent, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

interface Card{
  banner: string
  title: string
  description: string
  ImagesInfo: string[]
  fullDescription: React.ReactNode
}

// const ImagesInfo: string[] = [bannerBRRP, BRRP1, BRRP2, BRRP3, BRRP4]

export function Card({banner, title, description, ImagesInfo, fullDescription}: Card) {
  const [imageIndex, setImageIndex] = useState(0)

  function showPrevImage(){
    setImageIndex(index => {
      if(index === 0) return ImagesInfo.length - 1
      return index - 1
    })
  }

  function showNextImage(){
    setImageIndex(index => {
      if(index === ImagesInfo.length - 1) return 0
      return index + 1
    })
  }

  return (
    <Container>
      <img src={banner} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>Saiba mais!</button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Overlay className="DialogOverlay" />
          <DialogContent className="DialogContent">
            <div className="slider">
              <img src={ImagesInfo[imageIndex]} alt="" />
              <button onClick={showPrevImage} style={{left: 0}}>
                <ArrowBigLeft />
              </button>
              <button onClick={showNextImage} style={{right: 0}}>
                <ArrowBigRight />
              </button>
            </div>
            
            {fullDescription}
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  )
}
