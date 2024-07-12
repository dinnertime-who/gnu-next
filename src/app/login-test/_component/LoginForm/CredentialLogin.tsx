'use client';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { AuthProviderName } from '@/config/auth/providers';

type Props = React.HTMLAttributes<HTMLElement>;

const formSchema = z.object({
  email: z
    .string()
    .email({ message: '이메일 형식을 확인해주세요.' })
    .trim()
    .min(1, { message: '이메일을 입력하세요.' }),
  password: z.string().trim().min(1, { message: '비밀번호를 입력하세요.' }),
});

export const CredentialLogin = ({ className }: Props) => {
  const form = useForm<z.output<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleEntryForm = form.handleSubmit(async (data: z.output<typeof formSchema>) => {
    await signIn(AuthProviderName.credentials, data);
  });

  return (
    <article className={cn('', className)}>
      <Form {...form}>
        <form action={() => handleEntryForm()}>
          <fieldset className="flex flex-col gap-y-4" disabled={form.formState.isSubmitting}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-[4em_auto] items-center gap-x-3 gap-y-2">
                    <FormLabel className="text-primary">이메일</FormLabel>
                    <FormControl>
                      <Input type="text" autoComplete="email" placeholder="이메일" {...field}></Input>
                    </FormControl>
                    <div></div>
                    <FormMessage></FormMessage>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="grid grid-cols-[4em_auto] items-center gap-x-3 gap-y-2">
                    <FormLabel className="text-primary">비밀번호</FormLabel>
                    <FormControl>
                      <Input type="password" autoComplete="current-password" placeholder="비밀번호" {...field}></Input>
                    </FormControl>
                    <div></div>
                    <FormMessage></FormMessage>
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit">로그인</Button>
          </fieldset>
        </form>
      </Form>
    </article>
  );
};
