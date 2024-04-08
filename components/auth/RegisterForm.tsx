// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
//   DropdownMenuLabel,
//   DropdownMenuSeparator

// } from "../ui/dropdown-menu";
// import { useState } from "react";
// import CardWrapper from "./CardWrapper";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { RegisterSchema } from "../../schemas";
// import { Input } from "../../components/ui/input";
// import FormError from "../FormError";
// import FormSuccess from "../FormSuccess";
// import { useTransition } from "react";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../../components/ui/form";
// import { Button } from "../ui/button";
// import { register } from "../../app/actions/register";

// const RegisterForm = () => {
//   enum UserRole {
//     ADMIN = "ADMIN",
//     USER = "USER",
//   }
//   const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.USER);

//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");

//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof RegisterSchema>>({
//     resolver: zodResolver(RegisterSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//       name: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       register({ ...values, role: selectedRole }).then((data) => {
//         setError(data.error);
//         setSuccess(data.success);
//       });
//     });
//   };

//   return (
//     <div>
//       <CardWrapper
//         headerLabel="Create an acount"
//         backButtonlabel="Already have an account"
//         backButtonHref="/auth/login"
//         showSocial
//       >
//         <div>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
//               <div className="space-y-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Full Name</FormLabel>
//                       <FormControl>
//                         <div>
//                           <Input
//                             {...field}
//                             disabled={isPending}
//                             placeholder="john koirala"
//                             type="text"
//                           />
//                           <FormMessage />
//                         </div>
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>EMAIL</FormLabel>
//                       <FormControl>
//                         <div>
//                           <Input
//                             {...field}
//                             disabled={isPending}
//                             placeholder="john@example.com"
//                             type="email"
//                           />
//                           <FormMessage />
//                         </div>
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Password</FormLabel>
//                       <FormControl>
//                         <div>
//                           <Input
//                             {...field}
//                             disabled={isPending}
//                             placeholder="********"
//                             type="Password"
//                           />
//                           <FormMessage />
//                         </div>
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="role"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Role</FormLabel>
//                       <FormControl>
//                         <div>
//                           <DropdownMenu>
//                             <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//                             <DropdownMenuContent>
//                               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                               <DropdownMenuSeparator />
//                               <DropdownMenuItem>Profile</DropdownMenuItem>
//                               <DropdownMenuItem>Billing</DropdownMenuItem>
//                               <DropdownMenuItem>Team</DropdownMenuItem>
//                               <DropdownMenuItem>Subscription</DropdownMenuItem>
//                             </DropdownMenuContent>
//                           </DropdownMenu>
//                           <FormMessage />
//                         </div>
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />

//                 {/* <FormField
//   control={form.control}
//   name="role"
//   render={({ field }) => (
//     <FormControl>
//       <FormLabel>Role</FormLabel>
//       <select
//         {...field}
//         disabled={isPending}
//         value={selectedRole}
//         onChange={(e) => setSelectedRole(e.target.value as UserRole)}
//       >
//         <option value={UserRole.USER}>User</option>
//         <option value={UserRole.ADMIN}>Admin</option>
//       </select>
//       <FormMessage />
//     </FormControl>
//   )}
// /> */}

//                 {/* Add other form fields here */}
//               </div>

//               <FormError message={error} />
//               <FormSuccess message={success} />

//               <Button type="submit" className="w-full" disabled={isPending}>
//                 Create an account
//               </Button>
//             </form>
//           </Form>
//         </div>
//       </CardWrapper>
//     </div>
//   );
// };

// export default RegisterForm;

// // "use client";

// // import React, { useState } from "react";
// // import CardWrapper from "./CardWrapper";
// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import * as z from "zod";
// // import { RegisterSchema } from "../../schemas";
// // import { Input } from "../../components/ui/input";
// // import FormError from "../FormError";
// // import FormSuccess from "../FormSuccess";
// // import { useTransition } from "react";
// // import {
// //   Form,
// //   FormControl,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "../../components/ui/form";
// // import { Button } from "../ui/button";
// // import {register} from "../../app/actions/register";

// // const RegisterForm = () => {
// // const [error, setError] = useState<string | undefined>("");
// // const [success, setSuccess] = useState<string | undefined>("");

// //   const[isPending, startTransition] = useTransition();

// //   const form = useForm<z.infer<typeof RegisterSchema>>({
// //     resolver: zodResolver(RegisterSchema),
// //     defaultValues: {
// //       email: "",
// //       password: "",
// //       name:"",
// //     },
// //   });

// //   const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
// //     setError("");
// //     setSuccess("");

// //     startTransition(() => {
// //       register(values)
// //         .then((data) => {
// //           setError(data.error);
// //           setSuccess(data.success);
// //         })
// //     })

// //   };

// //   return (
// //     <CardWrapper
// //       headerLabel="Create an acount"
// //       backButtonlabel="Already have an account"
// //       backButtonHref="/auth/login"
// //       showSocial
// //     >
// //       <Form {...form}>
// //         <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
// //           <div className="space-y-6">
// //           <FormField
// //               control={form.control}
// //               name="name"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Full Name</FormLabel>
// //                   <FormControl>
// //                     <div>
// //                       <Input
// //                         {...field}
// //                         disabled={isPending}
// //                         placeholder="john koirala"
// //                         type="text"
// //                       />
// //                       <FormMessage />
// //                     </div>
// //                   </FormControl>
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="email"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>EMAIL</FormLabel>
// //                   <FormControl>
// //                     <div>
// //                       <Input
// //                         {...field}
// //                         disabled={isPending}
// //                         placeholder="john@example.com"
// //                         type="email"
// //                       />
// //                       <FormMessage />
// //                     </div>
// //                   </FormControl>
// //                 </FormItem>
// //               )}
// //             />
// //             <FormField
// //               control={form.control}
// //               name="password"
// //               render={({ field }) => (
// //                 <FormItem>
// //                   <FormLabel>Password</FormLabel>
// //                   <FormControl>
// //                     <div>
// //                       <Input
// //                         {...field}
// //                         disabled={isPending}
// //                         placeholder="********"
// //                         type="Password"
// //                       />
// //                       <FormMessage />
// //                     </div>
// //                   </FormControl>
// //                 </FormItem>
// //               )}
// //             />
// //             {/* Add other form fields here */}
// //           </div>

// //           <FormError message={error} />
// //           <FormSuccess message={success}/>

// //           <Button type="submit" className="w-full" disabled={isPending}>
// //             Create an account
// //           </Button>

// //         </form>
// //       </Form>
// //     </CardWrapper>
// //   );
// // };

// // export default RegisterForm;

"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "../../schemas";
import { Input } from "../../components/ui/input";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { useTransition } from "react";
import CardWrapper from "./CardWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Button } from "../ui/button";
import { register } from "../../app/actions/register";

const RegisterForm = () => {
    enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
  }
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.USER);

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: undefined,
    },
  });

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    form.setValue("role", role); // Update the form value
  };

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    
      <CardWrapper
      headerLabel="Create an acount"
      backButtonlabel="Already have an account"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <div className="space-y-6">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john koirala"
                        type="text"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>EMAIL</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="john@example.com"
                        type="email"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="********"
                        type="Password"
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <div>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Input
                            {...field}
                            disabled={isPending}
                            value={selectedRole}
                            onChange={() => {}}
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40" align="end">
                          <DropdownMenuItem
                            onSelect={() => handleRoleSelect(UserRole.USER)}
                          >
                            User
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={() => handleRoleSelect(UserRole.ADMIN)}
                          >
                            Admin
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Error and success messages */}
          <FormError message={error} />
          <FormSuccess message={success} />

          {/* Submit button */}
          <Button type="submit" className="w-full" disabled={isPending}>
            Create an account
          </Button>
        </form>
      </Form>
      </CardWrapper>
   
  );
};

export default RegisterForm;
