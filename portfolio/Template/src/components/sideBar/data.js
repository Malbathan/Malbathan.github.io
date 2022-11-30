import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/account/users',
        icon: <BsIcons.BsDot />,
        
        subNav: [
          {
            title: 'User',
            path: '/account/users/user',
            icon: <BsIcons.BsDot />,
          }
        ]

      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <BsIcons.BsDot />
      }
    ]
  },
  {
    title: 'Consultas',
    path: '/consultas',
    icon: <TbIcons.TbFileSearch />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        icon: <BsIcons.BsDot />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        icon: <BsIcons.BsDot />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <BsIcons.BsDot />,
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <BsIcons.BsDot />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <BsIcons.BsDot />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];