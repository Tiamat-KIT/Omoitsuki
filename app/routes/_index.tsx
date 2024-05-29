import type { MetaFunction } from '@remix-run/node';
import { useEffect } from 'react';
import { Calendar } from '@yamada-ui/calendar';
import Modal from '~/components/modal';
import { Center, List, ListItem, VStack } from '@yamada-ui/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Student Station WorkTime Schedule Admin' },
    { name: 'robots', content: 'noindex' },
    { name: 'googlebot', content: 'noindex' },
    { meta: 'googlebot-news', content: 'noindex' },
    { property: 'og:title', content: 'KIT Student Station App' },
  ];
};

export default function Index() {
  useEffect(() => {}, []);
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Calendar
        dateFormat="YYYY年 MMMM"
        locale="ja"
        size="full"
        type="date"
        headerProps={{ mb: 2 }}
        labelProps={{ pointerEvents: 'none', icon: { display: 'none' } }}
        tableProps={{
          border: '1px solid',
          borderColor: 'border',
          th: { border: '1px solid', borderColor: 'border' },
          td: { border: '1px solid', borderColor: 'border' },
        }}
        dayProps={{
          h: 'auto',
          p: 2,
          _selected: {},
          _hover: {},
          _active: {},
          _ripple: {
            display: 'none',
          },
          transitionProperty: 'none',
          component: ({ date, isSelected }) => (
            <VStack alignItems="center">
              <Center
                bg={isSelected ? 'primary' : undefined}
                w={8}
                lineHeight={8}
                rounded="full"
                color={isSelected ? 'white' : undefined}
                transitionProperty="background"
                transitionDuration="normal"
              >
                {date.getDate()}
              </Center>

              <List w="full" gap="sm">
                <ListItem>
                  <Modal />
                </ListItem>
              </List>
            </VStack>
          ),
        }}
      />
    </div>
  );
}
