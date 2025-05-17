declare module 'choerodon-ui/pro' {
  import { FC, ReactNode } from 'react';

  export interface ButtonProps {
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'default';
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    loading?: boolean;
    icon?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    [key: string]: any;
  }

  export const Button: FC<ButtonProps>;

  // 添加其他组件的类型定义
  export interface TableProps {
    [key: string]: any;
  }
  export const Table: FC<TableProps>;

  export interface FormProps {
    [key: string]: any;
  }
  export const Form: FC<FormProps>;

  export interface InputProps {
    [key: string]: any;
  }
  export const Input: FC<InputProps>;

  export interface SelectProps {
    [key: string]: any;
  }
  export const Select: FC<SelectProps>;

  export interface ModalProps {
    [key: string]: any;
  }
  export const Modal: FC<ModalProps>;

  export interface DatePickerProps {
    [key: string]: any;
  }
  export const DatePicker: FC<DatePickerProps>;

  export interface TimePickerProps {
    [key: string]: any;
  }
  export const TimePicker: FC<TimePickerProps>;

  export interface UploadProps {
    [key: string]: any;
  }
  export const Upload: FC<UploadProps>;

  export interface MenuProps {
    [key: string]: any;
  }
  export const Menu: FC<MenuProps>;

  export interface DropdownProps {
    [key: string]: any;
  }
  export const Dropdown: FC<DropdownProps>;

  export interface TabsProps {
    [key: string]: any;
  }
  export const Tabs: FC<TabsProps>;

  export interface CardProps {
    [key: string]: any;
  }
  export const Card: FC<CardProps>;

  export interface ListProps {
    [key: string]: any;
  }
  export const List: FC<ListProps>;

  export interface TreeProps {
    [key: string]: any;
  }
  export const Tree: FC<TreeProps>;

  export interface TreeSelectProps {
    [key: string]: any;
  }
  export const TreeSelect: FC<TreeSelectProps>;

  export interface TransferProps {
    [key: string]: any;
  }
  export const Transfer: FC<TransferProps>;

  export interface CascaderProps {
    [key: string]: any;
  }
  export const Cascader: FC<CascaderProps>;

  export interface AutoCompleteProps {
    [key: string]: any;
  }
  export const AutoComplete: FC<AutoCompleteProps>;

  export interface CheckboxProps {
    [key: string]: any;
  }
  export const Checkbox: FC<CheckboxProps>;

  export interface RadioProps {
    [key: string]: any;
  }
  export const Radio: FC<RadioProps>;

  export interface SwitchProps {
    [key: string]: any;
  }
  export const Switch: FC<SwitchProps>;

  export interface SliderProps {
    [key: string]: any;
  }
  export const Slider: FC<SliderProps>;

  export interface RateProps {
    [key: string]: any;
  }
  export const Rate: FC<RateProps>;

  export interface ProgressProps {
    [key: string]: any;
  }
  export const Progress: FC<ProgressProps>;

  export interface BadgeProps {
    [key: string]: any;
  }
  export const Badge: FC<BadgeProps>;

  export interface AvatarProps {
    [key: string]: any;
  }
  export const Avatar: FC<AvatarProps>;

  export interface TagProps {
    [key: string]: any;
  }
  export const Tag: FC<TagProps>;

  export interface TooltipProps {
    [key: string]: any;
  }
  export const Tooltip: FC<TooltipProps>;

  export interface PopoverProps {
    [key: string]: any;
  }
  export const Popover: FC<PopoverProps>;

  export interface PopconfirmProps {
    [key: string]: any;
  }
  export const Popconfirm: FC<PopconfirmProps>;

  export interface MessageProps {
    [key: string]: any;
  }
  export const message: {
    success: (content: ReactNode, duration?: number) => void;
    error: (content: ReactNode, duration?: number) => void;
    info: (content: ReactNode, duration?: number) => void;
    warning: (content: ReactNode, duration?: number) => void;
    loading: (content: ReactNode, duration?: number) => void;
  };

  export interface NotificationProps {
    [key: string]: any;
  }
  export const notification: {
    success: (config: NotificationProps) => void;
    error: (config: NotificationProps) => void;
    info: (config: NotificationProps) => void;
    warning: (config: NotificationProps) => void;
  };
} 