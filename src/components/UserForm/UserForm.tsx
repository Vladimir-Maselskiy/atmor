'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useCartContext } from '@/context/state';
import { useRouter } from 'next/navigation';
import {
  FieldWrapper,
  Label,
  StyledForm,
  StyledInput,
} from './UserForm.styled';
import { Button } from 'antd';
import { IUser } from '@/interfaces/interfaces';

export const UserForm = () => {
  const { cart, setCart } = useCartContext();
  const ref = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const onOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!(e.target instanceof HTMLFormElement)) {
      return;
    }
    let user: IUser = {
      email: '',
      address: '',
      name: '',
      phone: '',
    };
    const data = new FormData(e.target);
    const entries = data.entries();
    for (let entry of Array.from(entries)) {
      const key = entry[0] as 'phone' | 'email' | 'address' | 'name';
      const val = entry[1] as string;
      user[key] = val;
    }

    setTimeout(() => {
      router.push('/thank-page');
    }, 1000);
  };
  return (
    <StyledForm onSubmit={onOrderSubmit}>
      <FieldWrapper>
        <Label htmlFor="user-company-address">Address*</Label>

        <StyledInput
          id="user-company-address"
          name="address"
          type="text"
          placeholder="your company  address"
          required
        ></StyledInput>
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="user-name"> Full Name*</Label>
        <StyledInput
          id="user-name"
          name="name"
          type="text"
          pattern="^[A-Z][a-z]+(\s[A-Z][a-z]+)*$"
          placeholder="Your Full Name"
          required
        ></StyledInput>
      </FieldWrapper>
      <FieldWrapper>
        <Label htmlFor="user-email"> Your Email*</Label>
        <StyledInput
          id="user-email"
          name="email"
          type="email"
          placeholder="example@yourmail.com"
          required
        ></StyledInput>
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="user-phone">Phone number*</Label>
        <StyledInput
          id="user-phone"
          name="phone"
          type="tel"
          pattern="[+]380\d{9}"
          placeholder="Enter your phone"
          required
        ></StyledInput>
      </FieldWrapper>

      <Button type="primary" htmlType="submit" ref={ref}>
        Comfirm
      </Button>
    </StyledForm>
  );
};
