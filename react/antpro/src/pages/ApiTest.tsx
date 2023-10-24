import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme, Button } from 'antd';
import React, { useState, useEffect } from 'react';

/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const [players, setPlayers] = useState({
    player0: [],
    player1: [],
    player2: [],
    player3: []
  })
  const [player, setPlayer] = useState([])
  //單人排組
  const [deck, setDeck] = useState([])
  const [numberList, setNumberList] = useState([])
  const [currentPoint, setCurrentPoint] = useState(0)



  const urlTransfer = (number: number) => {
    const url = `http://aegis4206.tplinkdns.com//react/antpro/src/poker_img/poker(${number}).jpg`
    console.log(url)
    return url
  }


  // 洗牌
  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }



  useEffect(() => {
    const deckList = []
    for (let i = 1; i <= 52; i++) {
      deckList.push(i)
    }
    console.log('洗牌')
    shuffleDeck(deckList);
    setNumberList(deckList)

    const tempPlayers = players
    for (let i = 0; i < numberList.length; i++) {
      const playerIndex = 'player' + i % 4;
      // tempPlayers[playerIndex]=[...tempPlayers[playerIndex],numberList[i]]
      tempPlayers[playerIndex].push(numberList[i])
    }
    setPlayers(tempPlayers)

  }, [])


  // console.log('123', numberList)
  const handleAddPoker = () => {
    const tempDeck = [...deck]
    tempDeck.push(numberList[0])
    setDeck(tempDeck)
    numberList.shift()
  }
  const handleResetPoker = () => {
    const resetPoker = [...deck, ...numberList]
    shuffleDeck(resetPoker)
    setDeck([])
    setNumberList(resetPoker)
  }

  useEffect(() => {
    console.log(deck)
    const total = deck.reduce((acc, item) => {
      if (item > 13) {
        if (item % 13 === 0) return acc + 13
        console.log(item)

        return acc + (item % 13)
      }
      console.log(item)

      return acc + item
    }, 0)
    setCurrentPoint(total)

  }, [deck])



  return (
    <PageContainer>
      <Card>
        {/* <Button onClick={async () => {
          try {
            const res = await fetch('http://aegis4206.tplinkdns.com:8001/api/orderList', { 
              method: 'get' ,
            }).
            then((response)=>{
              return response.json();
            })
            console.log(res)
          } catch {
          }
        }}>
        </Button> */}
        {/* {
          numberList.map(i => {
            const src = urlTransfer(i)
            return (<img key={i} src={src}></img>)
          }
          )
        }
        <br></br> */}
        {/* <div>
          player1:{players.player0.map(i => {
            const src = urlTransfer(i)
            return (<img key={i} src={src}></img>)
          })}
        </div>
        <br></br>
        <div>
          player2:{players.player1.map(i => {
            const src = urlTransfer(i)
            return (<img key={i} src={src}></img>)
          })}
        </div>
        <br></br>
        <div>
          player3:{players.player2.map(i => {
            const src = urlTransfer(i)
            return (<img key={i} src={src}></img>)
          })}
        </div>
        <br></br>
        <div>
          player4:{players.player3.map(i => {
            const src = urlTransfer(i)
            return (<img key={i} src={src}></img>)
          })}
        </div> */}
        <hr></hr>
        當前點數:{currentPoint}
        <br></br>
        <Button disabled={numberList.length === 0} onClick={handleAddPoker}>抽牌</Button>
        <Button onClick={handleResetPoker}>洗回牌組</Button>
        {deck.map(i => {
          const src = urlTransfer(i)
          return (
            <img key={i} src={src}></img>
          )
        })}
      </Card>
    </PageContainer>
  );
};

export default Welcome;
