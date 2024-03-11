'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Họ và Tên' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* textarea */}
      <div className='relative flex items-center'>
        <Textarea placeholder='Gõ tin nhắn của bạn ở đây.' />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Gửi ngay
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
