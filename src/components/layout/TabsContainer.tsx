import React from 'react'

type tab = {
  name: string
  component: React.ReactNode
  icon: React.ReactNode
}

interface props {
  tabs: tab[]
}

const TabsContainer: React.FC<props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].name)
  return (
    <div className="my-2 md:block md:w-full">
      <ul className="mb-2 hidden flex-wrap justify-start border-b md:flex">
        {tabs.map((tab: tab, index: number) => (
          <li key={index} className={`${tab.name === activeTab ? 'border-b-2 ' : null}`}>
            <button
              className={`py-2 text-center capitalize md:px-4 ${
                tab.name === activeTab ? 'font-bold ' : null
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full">{tabs.filter((tab: tab) => tab.name === activeTab)[0].component}</div>
      <ul className="fixed bottom-0 left-0 flex w-full justify-around gap-4 rounded-t-xl bg-gray-200 py-2 sm:hidden ">
        {tabs.map((tab: tab, index: number) => (
          <li key={index} className="text-2xl md:hidden">
            <button
              className={`py-2 text-center uppercase md:px-8 ${
                tab.name === activeTab ? 'font-bold ' : null
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className="flex flex-col items-center">{tab.icon}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabsContainer
