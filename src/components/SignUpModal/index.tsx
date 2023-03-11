import React, { useState} from 'react';
import Image from 'next/image';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Modal, Form, Input, Divider} from 'antd';
import styles from './signup.module.css';
import Checkbox from 'antd/lib/checkbox/Checkbox';

export default function SignUpModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [passwordVisible, setPasswordVisible] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
   <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>

      <Modal 
        width={1000} 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={null}
        >
       
        <h1 className="semibold textLarge" style={{color: '#1a1028'}}>Welcome!</h1>
        <h3 className="mediumWeight" style={{color: '#706685'}}>Please create an account</h3>
      
        <div className={styles.container1}>
        <div>
        <Form className={styles.form}>
         <Form.Item >
            <h4>Email</h4>
            <Input
            className={styles.input}
            placeholder='Enter Email'
            />
         </Form.Item>
         <Form.Item >
         <h4>Password</h4>
         <Input.Password
         className={styles.input}
         placeholder='Enter Password'
         iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
         />
         </Form.Item>
         <Checkbox className='footnote'> I certify that I am 18 years or older</Checkbox>
         
         <Button type='primary' size="large" className={styles.signupbtn}>Sign Up</Button>

          <Divider style ={{borderColor:'#8145b5'}}>or</Divider>
         
          <Button  size="large" className={styles.googlebtn} >
            Continue with Google
          </Button>
          <p className="mediumWeight semibold">
          Already have an account?
          <a href='{{url}}'> Log in</a>
          </p>
        </Form>
        </div>
        <div>
        <Image alt="modal" width={572} height={743.63} src="/images/module.png"/>
       </div>
        </div>
      </Modal>
   
    </>

  )
}
