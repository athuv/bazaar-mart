import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormReturn,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/atoms/shadcn/form";
import { Input } from "@/app/_components/atoms/shadcn/input";

import { cn } from "@/lib/utils";

type GetInputValidationProps = {
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  touchedField: boolean | undefined;
};

interface FormInputWithLabelProps {
  name: string;
  label: string;
  placeholder: string;
  form: UseFormReturn<any, undefined>;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  isRequired: boolean;
  validation: GetInputValidationProps;
  serverValidation: string | undefined;
  defaultValue?: string;
}

function FormInputWithLabel({
  name,
  label,
  placeholder,
  form,
  type,
  isRequired = true,
  validation,
  serverValidation,
  defaultValue,
}: FormInputWithLabelProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="h-20 space-y-0">
          <div className="flex flex-col gap-1">
            <FormLabel className="text-card-foreground">{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                className={cn(
                  "focus-visible:border-none focus-visible:ring-1 focus-visible:ring-offset-0",
                  validation.error &&
                    "border-destructive  focus-visible:ring-destructive",
                  validation.touchedField &&
                    !validation.error &&
                    "valid:border-success focus-visible:ring-success",
                )}
                placeholder={placeholder}
                type={type}
                required={isRequired}
              />
            </FormControl>
          </div>
          <FormMessage className="pl-1 pt-1 text-xs" />
          <p className="pl-1 pt-1 text-xs font-medium text-destructive">
            {serverValidation}
          </p>
        </FormItem>
      )}
    />
  );
}
export default FormInputWithLabel;
