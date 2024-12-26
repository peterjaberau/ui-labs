import { FC, useMemo, useState, useCallback } from 'react';
import CollectionPreferences, {
  CollectionPreferencesProps,
} from '@cloudscape-design/components/collection-preferences';
import { NonCancelableEventHandler } from '../../internals/types';

import FullDataTable from './components/FullDataTable';
import RemoteUpdateTable from './components/RemoteUpdateTable';
import { TableProps } from './types';
import {
  DEFAULT_COLLECTION_PREFERENCES_TITLE,
  DEFAULT_COLLECTION_PREFERENCES_CONFRIM_LABEL,
  DEFAULT_COLLECTION_PREFERENCES_CANCEL_LABEL,
  DEFAULT_PAGE_SIZE_OPTIONS,
} from './config';

/**
 * A table presents data in a two-dimensional format, arranged in columns and rows in a rectangular form.
 * */
const Table: FC<TableProps> = ({ disableSettings, preferences: collectionPreferenceComponent, ...props }) => {
  const [preferences, setPreferences] = useState<CollectionPreferencesProps.Preferences>({
    pageSize: props.defaultPageSize,
    visibleContent: props.columnDefinitions.map((cd) => cd.id || ''),
  });

  const visibleContentOptions = useMemo(() => {
    return [
      {
        label: 'Main properties',
        options: props.columnDefinitions.map((cd) => ({
          id: cd.id || '',
          label: (typeof cd.header === 'string' ? cd.header : cd.id) || '',
        })),
      },
    ];
  }, [props.columnDefinitions]);

  const handlePreferenceChange: NonCancelableEventHandler<CollectionPreferencesProps.Preferences<any>> = useCallback(
    ({ detail }: any) => {
      setPreferences(detail);
    },
    []
  );

  const preferenceComponent = useMemo(() => {
    if (disableSettings) {
      return undefined;
    }

    if (collectionPreferenceComponent) {
      return collectionPreferenceComponent;
    }

    return (
      <CollectionPreferences
        title={DEFAULT_COLLECTION_PREFERENCES_TITLE}
        confirmLabel={DEFAULT_COLLECTION_PREFERENCES_CONFRIM_LABEL}
        cancelLabel={DEFAULT_COLLECTION_PREFERENCES_CANCEL_LABEL}
        pageSizePreference={{
          title: 'Page size',
          options: DEFAULT_PAGE_SIZE_OPTIONS,
        }}
        wrapLinesPreference={{
          label: 'Wrap lines',
          description: 'Check to see all the text and wrap the lines',
        }}
        stripedRowsPreference={{
          label: 'Striped rows',
          description: 'Check to add alternating shaded rows',
        }}
        visibleContentPreference={{
          title: 'Select visible columns',
          options: visibleContentOptions,
        }}
        preferences={preferences}
        onConfirm={handlePreferenceChange}
        {...props.collectionPreferencesProps}
      />
    );
  }, [
    disableSettings,
    preferences,
    props.collectionPreferencesProps,
    collectionPreferenceComponent,
    visibleContentOptions,
    handlePreferenceChange,
  ]);

  if ('onFetchData' in props && typeof props.onFetchData === 'function') {
    return <RemoteUpdateTable {...props} collectionPreferences={preferences} preferences={preferenceComponent} />;
  }

  return <FullDataTable {...props} collectionPreferences={preferences} preferences={preferenceComponent} />;
};

export default Table;
export * from './types';
export * from './config';
