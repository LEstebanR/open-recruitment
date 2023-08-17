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
    <div className='md:block md:w-full my-2'>
      <ul className='hidden border-b md:flex justify-start'>
        {tabs.map((tab: tab, index: number) => (
          <li
            key={index}
            className={`${tab.name === activeTab ? 'border-b-2 ' : null}`}
          >
            <button
              className={`py-2 md:px-8 text-center uppercase ${
                tab.name === activeTab ? 'font-bold ' : null
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>
      <div className='w-full'>
        {tabs.filter((tab: tab) => tab.name === activeTab)[0].component}
      </div>
      <ul className='flex sm:hidden gap-4 justify-around rounded-t-xl fixed bottom-0 left-0 py-2 bg-gray-200 w-full '>
        {tabs.map((tab: tab, index: number) => (
          <li key={index} className='md:hidden text-2xl'>
            <button
              className={`py-2 md:px-8 text-center uppercase ${
                tab.name === activeTab ? 'font-bold ' : null
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className='flex flex-col items-center'>{tab.icon}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabsContainer
