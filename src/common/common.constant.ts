export const ServiceProperties = {
  name: 'Container Agent',
  key: 'container_agent',
  version: 'v1.0',
  description:
    'The Container Agent connects your node to the Portainer Server, enabling resource management. Install it on your node and link it to your Portainer Server to get started.',
};

export enum GenderEnum {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export enum ActiveEnum {
  TRUE = 'true',
  FALSE = 'false',
  EMPTY = '',
}

export enum OrderEnum {
  DESC = 'desc',
  ASC = 'asc',
  EMPTY = '',
}

export enum ViewTypesEnum {
  VIEW = 'view',
  COURSE = 'course',
}

export const DEFAULT_DEVICE_SESSIONS = {
  web: 1,
  app: 1,
};
