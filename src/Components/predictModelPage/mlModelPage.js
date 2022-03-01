import React from "react";
import Paper from "@material-ui/core/Paper";
import ModelForm from "./modelForm";

export default function MlModelPage() {
  return (
    <div
      style={{
        paddingTop: "10vw",
        paddingBottom: "10vw",
      }}
    >
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "80vw",
          paddingBottom: "2rem",
          borderRadius: "25px",
        }}
      >
        <p
          style={{
            padding: "3rem 3rem 0rem 3rem",
          }}
        >
          A stroke is a life-threatening condition in which part of the brain
          dies as a result of a stoppage of blood supply to its tissues. The
          specific symptoms of a stroke occur suddenly and give little time for
          emergency action. On the basis of collected data, a machine learning
          model has been created, which is able to predict on the basis of given
          data with what probability a stroke is possible.
        </p>
        <p
          style={{
            padding: "2rem",
            color: "#b53026",
            textAlign: "center",
          }}
        >
          Remember! The result is not binding. To confirm your suspicions please
          contact your doctor!
        </p>
        <ModelForm />
      </Paper>
    </div>
  );
}
