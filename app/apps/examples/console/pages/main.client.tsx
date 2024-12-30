import React from 'react';
import { AppShell, Header } from '~/apps/custom';

export default function ConsoleMainExample() {
  return <AppShell header={<Header actions={'ACTIONS'} logo={'LOGO'} nav={'NAV'} />}>content here</AppShell>;
};

