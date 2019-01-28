import { Policy } from "./policy";
import { PolicyStatement } from "./policy-document";
import { IPrincipal } from "./principals";

/**
 * A construct that represents an IAM principal, such as a user, group or role.
 */
export interface IIdentity extends IPrincipal {
  /**
   * Adds an IAM statement to the default inline policy associated with this
   * principal. If a policy doesn't exist, it is created.
   */
  addToPolicy(statement: PolicyStatement): boolean;

  /**
   * Attaches an inline policy to this principal.
   * This is the same as calling `policy.addToXxx(principal)`.
   * @param policy The policy resource to attach to this principal.
   */
  attachInlinePolicy(policy: Policy): void;

  /**
   * Attaches a managed policy to this principal.
   * @param arn The ARN of the managed policy
   */
  attachManagedPolicy(arn: string): void;
}