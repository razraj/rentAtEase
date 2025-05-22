import { Control, Field, Label } from "@radix-ui/react-form";
import {
  form,
  type InputProps as InputVariants,
  type LabelProps,
} from "@tailus/themer";
import React, { createContext, useContext } from "react";
import { Root } from "@radix-ui/react-form";

export const FormControl = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Control>
>((props, forwardedRef) => <Control ref={forwardedRef} {...props} />);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, fancy, className, size, ...props }, forwardedRef) => {
    const { input } = form();

    const {
      variant: contextVariant,
      size: contextSize,
      floating,
    } = useContext(FormContext);

    variant = variant || contextVariant;
    size = size || contextSize;

    if (variant === "soft" && (size === "md" || size === "sm") && floating) {
      throw Error(
        "Floating label is only supported with size `lg` and `xl` for the soft variant !"
      );
    } else if (variant === "plain" && floating) {
      throw Error("Floating label is not supported with the plain variant !");
    }

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error(
        "Fancy is not supported with the bottomOutlined or plain variant !"
      );
    }

    return (
      <input
        ref={forwardedRef}
        className={input({ variant, fancy, size, floating, className })}
        {...props}
      />
    );
  }
);

export interface FormFieldProps extends LabelProps {
  className?: string;
}

export const FormContext = createContext<LabelProps>({});

export const FormField = React.forwardRef<
  React.ElementRef<typeof Field>,
  React.ComponentPropsWithoutRef<typeof Field> & FormFieldProps
>(
  (
    {
      className,
      size = "md",
      floating,
      asTextarea,
      name,
      variant = "mixed",
      ...props
    },
    forwardedRef
  ) => {
    const { field } = form();

    return (
      <FormContext.Provider value={{ size, variant, asTextarea, floating }}>
        <Field
          ref={forwardedRef}
          name={name}
          className={field({ size, variant, className })}
          {...props}
        />
      </FormContext.Provider>
    );
  }
);

export interface FormLabelProps extends LabelProps {
  className?: string;
}

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & FormLabelProps
>(({ className, floating, variant, size = "md", ...props }, forwardedRef) => {
  const { label } = form();

  const {
    variant: contextVariant,
    size: contextSize,
    floating: contextFloating,
    asTextarea: contextAsTextare,
  } = useContext(FormContext);

  variant = variant || contextVariant;
  size = size || contextSize;
  floating = floating || contextFloating;

  return (
    <Label
      ref={forwardedRef}
      className={label({
        size,
        floating,
        asTextarea: contextAsTextare,
        variant,
        className,
      })}
      {...props}
    />
  );
});

export const FormRoot = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, forwardedRef) => (
  <Root ref={forwardedRef} className={className} {...props} />
));

FormRoot.displayName = "FormRoot";
FormLabel.displayName = "FormLabel";
FormField.displayName = "FormField";
FormInput.displayName = "FormInput";
FormControl.displayName = "FormControl";
