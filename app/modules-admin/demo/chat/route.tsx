import { useEffect, useState } from "react"

import { LocalModels } from "./components"
import { Ollama } from "ollama/browser"
import { ProChat } from "@ant-design/pro-chat"
import type { loader } from "./loader"
import { useLoaderData } from "react-router"

type Typee = null | Ollama

let ollama: Typee = null

export function Route() {
  const data: any = useLoaderData<typeof loader>()
  const [localList, setLocalList] = useState([])
  const [showComponent, setShowComponent] = useState(false)
  if (!ollama) {
    ollama = new Ollama({ host: data?.data?.OLLAMA_URL })
  }
  const chat = async (messages: any) => {
    const response = await ollama?.chat({
      model: "qwen",
      messages,
      stream: true,
    })

    const stream = new ReadableStream({
      start(controller) {
        try {
          ;(async () => {
            const encoder = new TextEncoder()
            const reader = response?.[Symbol.asyncIterator]() // Get iterator

            // eslint-disable-next-line no-constant-condition
            while (true) {
              const s = await reader?.next() // Call the next method to get the next value
              const { value }: any = s!
              const { done }: any = value
              const { content } = value.message
              if (done) {
                controller.close()
                break
              }

              controller.enqueue(encoder.encode(content)) // Write content to stream
            }
          })()
        } catch (error) {
          console.log(error)
        }
      },
    })

    return stream
  }

  useEffect(() => setShowComponent(true), [])

  useEffect(() => {
    ollama?.list().then((list: any) => {
      setLocalList(list ?? [])
    })

    return () => {
      ollama = null
    }
  }, [data])

  return (
    <div className="flex flex-col h-[100vh]  w-[100%] items-center">
      <LocalModels list={localList as any} />
      {showComponent && (
        <div className=" bg-white w-[60vw] h-[94%] ">
          <ProChat
              helloMessage={"Install [ollama](https://ollama.com/), start chatting with api ~"}
              request={async (messages: any) => {
              const stream = await chat(messages)
              return new Response(stream)
            }}
            assistantMeta={{
              avatar: "🧠",
              title: "Intellectual brain",
              backgroundColor: "#67dedd",
            }}
          />
        </div>
      )}
    </div>
  )
}
