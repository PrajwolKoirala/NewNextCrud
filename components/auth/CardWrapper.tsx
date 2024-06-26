"use client"

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Header } from './Header';
import Social from './Social';
import BackButton from './BackButton'
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonlabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonlabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label= {headerLabel}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
      {showSocial && (
        <CardFooter>
          <Social/>

        </CardFooter>

    
      )}

<CardFooter>
<BackButton
          label = {backButtonlabel}
          href =  {backButtonHref}
          />
</CardFooter>
    </Card>
  );
};

export default CardWrapper;

// const CardWrapper: React.FC<CardWrapperProps> = ({
//   children,
//   headerLabel,
//   backButtonlabel,
//   backButtonHref,
//   showSocial,
// }: CardWrapperProps) => {
//   return (
//     <Card className="w-[400px] shadow-md">
//       <CardHeader>
//         <Header label={headerLabel} />
//       </CardHeader>
//       <CardContent>{children}</CardContent>
//       <CardFooter>
//         {showSocial && <Social />}
//         <BackButton label={backButtonlabel} href={backButtonHref} />
//       </CardFooter>
//     </Card>
//   );
// };
// export default CardWrapper;