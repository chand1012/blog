---
date: "2022-06-12"
title: From Crypto Dummy to Developer
draft: true
---

When I was asked if I wanted to participate in a crypto startup I was quite skeptical at first. The only experience with Crypto I had was from trying to Mine Bitcoin on my crappy 2GB graphics card from back in 2015, as well as planning on making a Chia Farm but never going though on the opportunity. Then I was informed that you could write code for the blockchain that did different transactions or could update the blockchain, there are these things called liquid staking platforms that allow people to earn interest on their crypto while also being able to sell their stake like a bond, and that there are decentralized methods of doing a liquid staking platform, and that some company that did this made $73 million in 3 months, and .....

If this all sounds confusing, that's where I was at in January of 2022 when I was asked to participate in new crypto venture. I knew that crypto was an anonymous and decentralized way to trade currency, and that it can be mined on a GPU, but that's it. I knew it was one of the *many* reasons GPUs were so damn expensive. But there was a **lot** of things I didn't know about it. After researching everything, I came to the conclusion that this venture would either bankrupt me, or I'd be a pioneer in a new industry. So, as I'm young and still in college, I said "Screw it, why not?"

Then I jumped down the rabbit hole of Web3. 

## Would you rather listen about it?

I do a small podcast with my friends and one of our first episodes had a large portion where I explained crypto! Check it out [here](https://anchor.fm/casual-coders/episodes/Chandler-Became-a-Crypto-Bro-----Casual-Coders-Podcast-7-e1d387u/a-a78joqo), skip to 20:10 for our conversation about crypto!

## What the hell is a Blockchain?

A blockchain if effectively a massive database with a history. Data cannot be deleted off the blockchain, only added to it. Every time a new transaction is processed, it does it in such a way where if older blocks were modified, the new block cannot be added to the chain.

The blockchain is not just hosted on a single computer. Its hosted on thousands of computers at once, and all of them have to agree on what is in the blockchain. It does this via a consensus mechanism. There are many different consensus mechanisms, and each blockchain employs their own to determine the current state of the blockchain.

## Consensus Mechanism?

The three most common consensus mechanisms are Proof-of-Work, Proof-of-Stake, and Proof-of-Authority. Let's start with Proof-of-Authority, which is the simplest mechanism.

### Proof-of-Authority

Proof-of-Authority means that a single computer has full control over the state of the entire blockchain. Those of you already a bit familiar with Web3 will know that this is not ideal, as one of the major points of Web3 is to decentralize the internet and move away from a single entity having full authority over everyone's money and data. However, PoA has its uses, the main which is testing. The main testnet for Ethereum, which is currently the largest blockchain, is called the [Goerli Testnet](https://goerli.net). This is a network based on Ethereum used to test new products and code on a blockchain network that behaves exactly like the real network, without using any currency with real value. This blockchain is PoA because for testing, its just easier and faster. 

### Proof-of-Work

Proof-of-Work has quite a lot of controversy behind it, as I've pointed out in a [previous article](/posts/whyyoushouldcareaboutweb3/#proof-of-work). Its slow, inefficient, and uses a crap-load of power. So, why is it used? Because it was the first one!

Proof-of-work blockchains work by having powerful graphics cards process the transaction sent out to the network. These graphics card compete to be the first person to guess the correct corresponding hash to the transaction. Now calculating a hash is easy for a modern computer, that's why the blockchain increases the "difficulty" to keep processing the blocks a valuable task. When a node on the blockchain successfully calculates the hash, the operator of the node is granted some currency.

Bitcoin revolutionized the way we see digital currency. Using massive GPUs, tons of power, and a lot of hard drive space, you could trade money anonymously! Its been well over a decade since Bitcoin hit the scene, and now that cryptocurrency is trying to break into the mainstream, so Proof-of-Work is out and Proof-of-Stake is in!

### Proof-of-Stake
