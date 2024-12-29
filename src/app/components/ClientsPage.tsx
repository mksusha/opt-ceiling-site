// "use client";
//
// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
//
// const ClientsPage = ({ events }: { events: any[] }) => {
//     const { t, ready } = useTranslation();
//
//     useEffect(() => {
//         console.log("Translation ready:", ready);
//     }, [ready]);
//
//     if (!ready) {
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <div>
//             <h1>{t("events.title")}</h1>
//             {events && events.length > 0 ? (
//                 <ul>
//                     {events.map((event, index) => (
//                         <li key={index}>{event.titleRu}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>{t("events.noEvents")}</p>
//             )}
//         </div>
//     );
// };
//
// export default ClientsPage;
