import React, { Fragment } from 'react'
import Link from 'next/link'
import Card from '@/components/card/card'
import Flex from '@/components/flex/flex'
import Input from '@/components/input/input'
import SecondaryButton from '@/components/button/button';
import { twMerge } from 'tailwind-merge'

export default function ForgetPassword() {
    return (
        <Fragment>
            <div className='my-40 mx-100'>
                <Flex justifycontent="between" items="center">
                    <Card className={twMerge("w-full shadow-md hover:shadow-md rounded-md")}>
                        <form className="gird grid-cols-1 gap-4 p-10">

                            <div className='mb-5 text-center'>
                                <div className='text-sm md:text-sm xl:text-lg lg:text-lg font-bold text-gray-700'>
                                    Forget Password
                                </div>
                            </div>

                            <div className='mb-5'>
                                <Input
                                    type="email"
                                    className={twMerge(
                                        "ps-2 pt-1 pb-1 rounded-md border-[rgba(206,222,238,0.83)]"
                                    )}
                                    placeholder="........@gmail.com"
                                />
                            </div>
                            <div className="col-span-1 mb-3">
                                <SecondaryButton className="cursor-pointer w-full">
                                    <span>Send Email</span>
                                </SecondaryButton>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Link href="/" className="text-indigo-500 font-medium text-sm cursor-pointer">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Card>
                </Flex>
            </div>
        </Fragment>
    )
}
